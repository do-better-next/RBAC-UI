<style scoped lang="less">
@import "../assets/css/theme/custom.less";
.login {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ddd6f3; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to bottom,
    #faaca8,
    #ddd6f3
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to bottom,
    #faaca8,
    #ddd6f3
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  overflow: hidden;
}

.login .login_main {
  width: 65%;
  height: 70%;
  display: flex;
  overflow: hidden;
}

.login .login_main .login_main_left {
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  background-color: @login_bgc;
  padding: 20px;
  width: 50%;
  text-align: center;
  overflow: hidden;
}

.login .login_main .login_main_left img {
  width: 70%;
  height: 50vh;
}

.login .login_main .login_main_left h1 {
  color: @primary;
  font-size: 2rem;
  letter-spacing: 6px;
  line-height: 1;
  text-shadow: 4px 3px 0 #383b3a, 9px 8px 0 rgba(0, 0, 0, 0.15);
  margin: 0 0 15px;
}

.login .login_main .login_main_left p {
  display: block;
  width: 200px;
  height: 35px;
}

.login .login_main .login_main_right p {
  /* display: block; */
  margin-left: 18em;
  height: 35px;
  width: 10rem;
}

.login .login_main .login_main_right {
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 20px;
  background-color: #fff;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  overflow: hidden;
}

.login .login_main .login_main_right h1 {
  font-size: 1.714rem;
  margin-bottom: 24px;
  color: #40485b;
}

.login .login_main .login_main_right .login_input {
  width: 80%;
  margin-top: 50px;
}

.code {
  display: flex;
  width: 100%;
  justify-content: space-between;
}

.code .codeBtn {
}

.login .login_main .login_main_right .bottom_login {
}

.login_btn:hover {
  color: #030303;
  opacity: 0.9;
}
</style>
<template>
  <div id="login" class="login animate__animated animate__zoomIn">
    <div class="login_main">
      <div class="login_main_left">
        <div class="logo">
          <h1>学习资源分享平台</h1>
        </div>
        <img src="../assets//images/login_main_left.png" alt="" />
        <p
          style="
            color: #fff;
            font-size: 14px;
            width: 25rem;
            line-height: 1.5;
            text-align: left;
            text-indent: 1rem;
            padding: 1rem 1.5rem;
          "
        >
          <i
            class="fa fa-regular fa-flag"
            style="color: #ed8b35; margin-right: 5px"
          ></i
          >本网站为广大需要资源的网友服务，取之于大家，用之于大家，大家的共同分享，才能使资源发挥最有用的价值！
        </p>
      </div>
      <div class="login_main_right">
        <div :model="countInfo" class="login_input">
          <h1>登录</h1>

          <!-- 账号密码登录 -->
          <div v-if="isCount">
            <el-input v-model="countInfo.count" placeholder="邮箱 / 手机号" />
            <div style="margin: 20px" />
            <el-input v-model="countInfo.password" placeholder="密码" />
            <div style="margin: 20px"></div>
            <p @click="phoneLoginPart">
              <i style="margin-right: 0.2rem" class="fa fa-comment-o"></i
              >短信登录
            </p>
          </div>

          <!-- 手机号验证码登录 -->
          <div v-if="isPhone">
            <el-input v-model="phoneInfo.phone" placeholder="手机号" />
            <div style="margin: 20px" />
            <div class="code">
              <el-input
                style="width: 45%; height: 2rem"
                v-model="phoneInfo.code"
                placeholder="验证码"
              />

              <el-button
                style="
                  width: 45%;
                  height: 2rem;
                  border: 0px;
                  background-color: #ed8b35;
                "
                type="primary"
                class="codeBtn"
                @click="getCode()"
              >
                {{ code == "获取验证码" ? code : code + " s" }}
              </el-button>
            </div>
            <div style="margin: 20px"></div>
            <p @click="countLoginPart">
              <i style="margin-right: 0.2rem" class="fa fa-user-o"></i>用户登录
            </p>
          </div>

          <!-- 邮箱验证码登录 -->
          <div v-if="isEmail">
            <el-input v-model="emailInfo.email" placeholder="邮箱" />
            <div style="margin: 20px" />
            <div class="code">
              <el-input
                style="width: 45%; height: 2rem"
                v-model="emailInfo.code"
                placeholder="验证码"
              />

              <el-button
                style="
                  width: 45%;
                  height: 2rem;
                  border: 0px;
                  background-color: #ed8b35;
                "
                type="primary"
                class="codeBtn"
                @click="getCode()"
              >
                {{ code == "获取验证码" ? code : code + " s" }}
              </el-button>
            </div>
            <div style="margin: 20px"></div>
            <p @click="countLoginPart">用户名密码登录</p>
          </div>

          <el-button
            class="login_btn"
            style="width: 100%; border: 0px; background-color: #eb7e1e"
            type="primary"
            @click="submitForm"
            >登录</el-button
          >
          <!-- <el-button style="width: 100%;" type="primary" :loading-icon="Eleme" loading>Loading</el-button> -->
        </div>

        <div class="bottom_login btn-group">
          <a
            class="btn btn-default"
            style="color: #040000"
            href="https://github.com/vuejs/"
            title="github"
            target="_blank"
            rel="noopener noreferrer"
            ><i class="fa fa-brands fa-github fa-2x"></i
          ></a>
          <a
            @click="emailLoginPart"
            class="btn btn-default"
            style="margin-left: 40px; color: #ed8b35"
            href="#"
            ><i class="fa fa-regular fa-envelope fa-2x"></i
          ></a>
          <a
            class="btn btn-default"
            style="margin-left: 40px; color: #0084d0"
            href="#"
            ><i class="fa fa-brands fa-qq fa-2x"></i
          ></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref, onMounted } from "vue";
import {
  getEmailCode,
  getPhoneCode,
  countLogin,
  phoneLogin,
  emailLogin,
} from "../api/login";
import { ElMessage } from "element-plus";
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();
const code = ref<Number | String>("获取验证码");
const codeBtn = ref();
const isLoading = ref(true);
const countInfo = reactive({
  count: "",
  password: "",
});
const phoneInfo = reactive({
  phone: "",
  code: "",
});
const emailInfo = reactive({
  email: "1544748556@qq.com",
  code: "",
});
const isCount = ref(true);
const isEmail = ref(false);
const isPhone = ref(false);

const emailLoginPart = async () => {
  isCount.value = false;
  isPhone.value = false;
  isEmail.value = true;
};
const countLoginPart = async () => {
  isCount.value = true;
  isPhone.value = false;
  isEmail.value = false;
};
const phoneLoginPart = async () => {
  isCount.value = false;
  isEmail.value = false;
  isPhone.value = true;
};
onMounted(() => {});
const submitForm = () => {
  if (isCount.value) {
    submitByCount();
  }
  if (isPhone.value) {
    submitByPhone();
  }
  if (isEmail.value) {
    submitByEmail();
  }
};
const getCode = async () => {
  console.log(emailInfo.email);
  if (isEmail.value) {
    document.querySelector(".codeBtn").setAttribute("disabled", true);

    const { data } = await getEmailCode({ email: emailInfo.email });
    if (data.code == 200) {
      document.querySelector(".codeBtn").style.backgroundColor =
        "#7e8c8d !important";
      code.value = 60;
      const timer = setInterval(() => {
        code.value--;
        if (code.value == 0) {
          clearInterval(timer);
          code.value = "获取验证码";
          document.querySelector(".codeBtn").removeAttribute("disabled");
        }
      }, 1000);
      ElMessage.success("发送成功!");
    } else {
      ElMessage.error("请勿重复发送!");
    }
    return true;
  }
  if (isPhone.value) {
    // const {data} = await getPhoneCode(phoneInfo)
    console.log("p");
  }
};
const submitByCount = () => {
  console.log(1);
};
const submitByPhone = () => {
  console.log(2);
};
const submitByEmail = async () => {
  const { data } = await emailLogin(emailInfo);
  if (data.code == 200) {
    console.log(data);
    ElMessage.success("欢迎" + data.map.user.username + "登录成功！");
    router.push({ path: "/home" });
  } else {
    ElMessage.error(data.msg);
  }
};
</script>
