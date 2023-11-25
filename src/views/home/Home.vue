<script lang="ts" setup>
import { ref, reactive, onMounted } from "vue";
import "../../api/map";
var map = null;
const url = ref("");
const searchCHXY = () => {
  AMap.plugin(["AMap.PlaceSearch"], function () {
    //构造地点查询类
    new AMap.PlaceSearch({
      pageSize: 5, // 单页显示结果条数
      pageIndex: 1, // 页码
      city: "010", // 兴趣点城市
      citylimit: true, //是否强制限制在设置的城市内搜索
      map: map, // 展现结果的地图实例
      panel: "panel", // 结果列表将在此容器中进行展示。
      autoFitView: true, // 是否自动调整地图视野使绘制的 Marker点都处于视口的可见范围
    }).search("巢湖学院");
  });
  console.log(111);
};

const showRoad = () => {
  AMap.plugin("AMap.ToolBar", function () {
    map.addControl(new AMap.ToolBar());
  });

  console.log(11);
  const traffic = new AMap.TileLayer.Traffic({
    autoRefresh: true, //是否自动刷新，默认为false
    interval: 180, //刷新间隔，默认180s
  });
  map.add(traffic); //通过add方法添加图层
};

onMounted(() => {
  window._AMapSecurityConfig = {
    securityJsCode: "df7e61611463c3623aebc0cfcf894b56",
  };
  map = new AMap.Map("container", {
    resizeEnable: true,
    zoom: 12,
    center: [117.88937, 31.62329],
    //   layers: [new AMap.TileLayer.Satellite()],  //设置图层,可设置成包含一个或多个图层的数组
    //   mapStyle: 'amap://styles/whitesmoke',  //设置地图的显示样式
    //  viewMode: '2D',  //设置地图模式
  });
});

const displayImg = () => {
  const file = document.querySelector("#fileInput")
  const reader = new FileReader();
  

  
  reader.onloadend = function (e) {
    console.log(e.target);
    url.value = e.target.result;
  };

  reader.readAsDataURL(file.files[0]);
};
</script>

<template>
  <input id="fileInput" @change="displayImg()"  type="file" />
  
  <router-link to="/login">登录</router-link>
  <iframe
    style="display: none"
    src="https://ditu.amap.com/regeo?lng=117.931088&lat=31.647374&src=uriapi&innersrc=uriapi"
  ></iframe>
  <h1 @click="searchCHXY()">搜索巢湖学院</h1>
  <h1 @click="showRoad()">显示交通路况图层</h1>
  <div id="container"></div>
  <div id="panel"></div>
  <img  id="preview" :src="url" alt="" />
</template>

<style lang="less">
iframe {
  width: 600px;
  height: 600px;
}
#container {
  position: absolute;
  z-index: -77;
  top: 80px;
  left: 0;
  right: 0;
  bottom: 0;
  width: 80vw;
  height: 600px;
}

.button-group {
  position: absolute;
  bottom: 20px;
  right: 20px;
  font-size: 12px;
  padding: 10px;
}

.button-group .button {
  height: 28px;
  line-height: 28px;
  background-color: #0d9bf2;
  color: #fff;
  border: 0;
  outline: none;
  padding-left: 5px;
  padding-right: 5px;
  border-radius: 3px;
  margin-bottom: 4px;
  cursor: pointer;
}
.button-group .inputtext {
  height: 26px;
  line-height: 26px;
  border: 1px;
  outline: none;
  padding-left: 5px;
  padding-right: 5px;
  border-radius: 3px;
  margin-bottom: 4px;
  cursor: pointer;
}
/*
.tip {
	position: absolute;
	bottom: 30px;
	right: 10px;
	background-color: #FFF;
	text-align: center;
	border: 1px solid #ccc;
	line-height: 30px;
	border-radius: 3px;
	padding: 0 5px;
	font-size: 12px;
}
*/
#tip {
  background-color: #fff;
  padding-left: 10px;
  padding-right: 10px;
  position: absolute;
  font-size: 12px;
  right: 10px;
  top: 20px;
  border-radius: 3px;
  border: 1px solid #ccc;
  line-height: 30px;
}

/*
#tip input[type='button'] {
	margin-top: 10px;
	margin-bottom: 10px;
	background-color: #0D9BF2;
	height: 30px;
	text-align: center;
	line-height: 30px;
	color: #fff;
	font-size: 12px;
	border-radius: 3px;
	outline: none;
	border: 0;
}
*/
.amap-info-content {
  font-size: 12px;
}

#myPageTop {
  position: absolute;
  top: 5px;
  right: 10px;
  background: #fff none repeat scroll 0 0;
  border: 1px solid #ccc;
  margin: 10px auto;
  padding: 6px;
  font-family: "Microsoft Yahei", "微软雅黑", "Pinghei";
  font-size: 14px;
}
#myPageTop label {
  margin: 0 20px 0 0;
  color: #666666;
  font-weight: normal;
}
#myPageTop input {
  width: 170px;
}
#myPageTop .column2 {
  padding-left: 25px;
}
#panel {
  position: absolute;
  background-color: rgb(197, 46, 46);
  max-height: 90%;
  overflow-y: auto;
  top: 10px;
  right: 10px;
  width: 280px;
  z-index: 999;
}
</style>
