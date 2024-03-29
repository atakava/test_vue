<script>
export default {
  data() {
    return {
      isVisible: false,
      user: {
        name: "",
        lastName: "",
        age: "",
        language: "",
        city: "",
      },
      errorMessage: "",
      userJSON: null
    }
  },
  methods: {
    openModal() {
      this.isVisible = true;
    },
    closeModal() {
      this.isVisible = false;
      this.errorMessage = "";
    },
    submitData() {
      if (!this.user.name || !this.user.lastName || !this.user.age || !this.user.language || !this.user.city) {
        this.errorMessage = "Нужно заполнить все поля";
      } else {
        this.userJSON = JSON.stringify(this.user, null, 2);
        this.isVisible = false;
        this.errorMessage = "";
      }
    }
  }
}
</script>

<template>
  <div class="container start">
    <button class="btn-start" @click="openModal" v-if="userJSON == null">Начать</button>
    <div class="pop-up" v-if="isVisible">
      <div class="input-container">
        <div class="input-field">
          <label>Имя:</label>
          <input v-model="user.name">
          <span v-if="!user.name" class="error-message">Нужно заполнить это поле</span>
        </div>
        <div class="input-field">
          <label>Фамилия:</label>
          <input v-model="user.lastName">
          <span v-if="!user.lastName" class="error-message">Нужно заполнить это поле</span>
        </div>
        <div class="input-field">
          <label>Возраст:</label>
          <input v-model="user.age">
          <span v-if="!user.age" class="error-message">Нужно заполнить это поле</span>
        </div>
        <div class="input-field">
          <label>Город:</label>
          <input v-model="user.city">
          <span v-if="!user.city" class="error-message">Нужно заполнить это поле</span>
        </div>
        <div class="input-field">
          <label>Язык:</label>
          <input v-model="user.language">
          <span v-if="!user.language" class="error-message">Нужно заполнить это поле</span>
        </div>
      </div>
      <button class="submit-data" @click="submitData">Отправить</button>
      <span v-if="errorMessage" class="error-message">{{ errorMessage }}</span>
    </div>
    <div class="overlay" v-if="isVisible" @click="closeModal"></div>
    <div v-if="userJSON" class="json-output">
      <h2>Данные в формате JSON:</h2>
      <pre>{{ userJSON }}</pre>
    </div>
  </div>
</template>

<style scoped>

.btn-start {
  width: 170px;
  padding: 10px 0;
  font-size: 16px;
  background-color: #333;
  color: white;
  border: none;
  border-radius: 5px;
}

.pop-up {
  display: flex;
  flex-direction: column;
  max-width: 500px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  background: #fff;
  padding: 35px;
  border-radius: 14px;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  height: 100vh;
  background: rgba(0, 0, 0, 80%);
}

.input-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.input-field {
  width: calc(50% - 10px);
  margin-bottom: 15px;
}

.input-field label {
  display: block;
  margin-bottom: 5px;
  color: #333;
}

.input-field input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
}

@media screen and (max-width: 768px) {
  .input-field {
    width: 100%;
  }
}

.error-message {
  color: #ff0000;
  font-size: 12px;
}

.json-output {
  margin-top: 20px;
  padding: 10px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.submit-data {
  padding: 10px 20px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-data:hover {
  background-color: #555;
}
</style>