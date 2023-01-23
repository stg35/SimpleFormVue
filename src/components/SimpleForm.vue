<template>
    <form :class="$style.form" @submit.prevent="submitData">
        <div>
            <label>Логин</label>
            <input-custom @input-on="loginChanged" :error="loginError"/>
        </div>
        <div>
            <label for="phone">Телефон</label>
            <input-custom @input-on="phoneChanged" :error="phoneError"/>
        </div>
        <div>
            <label for="password">Пароль</label>
            <input-custom type="password" @input-on="passChanged" :error="passError"/>
        </div>
        <div>
            <button :class="[$style.button, $style.primary]">Войти</button>
        </div>
    </form>
</template>

<script>
import InputCustom from './InputCustom.vue';
import { ValidateLogin, ValidatePhone } from '../../helpers/helpers.js';

export default {
    components: {
        InputCustom
    },
    data() {
        return {
            enteredLogin: '',
            enteredPhone: '',
            enteredPass: '',
            passError: '',
            phoneError: '',
            loginError: '',
            erorrs: {
                emptyField: 'Обязательное поле',
                forbiddenSymbols: 'Недопустимые символы',
                phoneErrorSymbols: 'Введите 11 цифр',
                loginErrorSymbols: 'Введите более 5 символов',
                passErrorSymbols: 'Введите более 6 символов'
            },
            isSubmitted: false
        }
    },
    methods: {
        loginChanged(enteredValue) {
            this.enteredLogin = enteredValue;
            if(this.isSubmitted) {
                this.validateLogin();
            }
        },
        phoneChanged(enteredValue) {
            this.enteredPhone = enteredValue;
            if(this.isSubmitted) {
                this.validatePhone();
            }
        },
        passChanged(enteredValue) {
            this.enteredPass = enteredValue;
            if(this.isSubmitted) {
                this.validatePass();
            }
        },
        submitData() {
            this.validateLogin();
            this.validatePhone();
            this.validatePass();
            if(!this.loginError && !this.phoneError && !this.passError) {
                alert("Данные успешно отправлены!");
            }
            this.isSubmitted = true;
        },
        validateLogin() {
            let check = true;
            if(this.enteredLogin == '') {
                this.loginError = this.erorrs.emptyField;
                check = false
            } else if(this.enteredLogin.length <= 5) {
                this.loginError = this.erorrs.loginErrorSymbols;
                check = false
            } else if(!ValidateLogin(this.enteredLogin)) {
                this.loginError = this.erorrs.forbiddenSymbols;
                check = false
            }
            
            if(check) {
                this.loginError = '';
            }
        },
        validatePhone() {
            let check = true;
            if(this.enteredPhone == '') {
                this.phoneError = this.erorrs.emptyField;
                check = false
            } else if(this.enteredPhone.length != 11) {
                this.phoneError = this.erorrs.phoneErrorSymbols;
                check = false
            } else if(!ValidatePhone(this.enteredPhone)) {
                this.phoneError = this.erorrs.forbiddenSymbols;
                check = false
            }

            if(check) {
                this.phoneError = '';
            }
        },
        validatePass() {
            let check = true;
            if(this.enteredPass == '') {
                this.passError = this.erorrs.emptyField;
                check = false
            } else if(this.enteredPass.length <= 6) {
                this.passError = this.erorrs.passErrorSymbols;
                check = false
            }

            if(check) {
                this.passError = '';
            }
        }
    }

}
</script>

<style module>
.button {
    display: inline-block;

    box-sizing: border-box;
    padding: 10px;

    cursor: pointer;
    text-align: center;
    border: none;
    border-radius: 5px;

    font-size: 14px;
    transition: all 0.2;
}

.primary {
    color: var(--white);
    background-color: var(--primary);
}

.primary:hover {
    background-color: var(--primary-hover);
}
</style>