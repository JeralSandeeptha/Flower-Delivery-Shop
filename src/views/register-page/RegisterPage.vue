<script setup lang="ts">
import { ref } from 'vue';
import Button from '../../components/button/Button.vue';
import Header from '../../components/header/Header.vue';
import Paragraph from '../../components/paragraph/Paragraph.vue';
import Loading from '../../components/loading/Loading.vue';
import registerUserWithEmailAndPassword from '../../services/registerWithUsernamePassword/registerWithUsernamePassword';
import { useRouter } from 'vue-router';
import signFromGoogle from '../../services/signFromGoogle/signFromGoogle';
import Toast from 'primevue/toast';
import { useToast } from 'primevue/usetoast';

const toast = useToast();

const email = ref<string>('');
const password = ref<string>('');

const router = useRouter();

const isError = ref<boolean>(false);
const isSuccess = ref<boolean>(false);
const isLoading = ref<boolean>(false);

const registerUser = () => {
    if (email.value.trim() === '' || password.value.trim() === '') {
        console.log('Please enter valid details');
        showValidation();
    } else {
        console.log('Details');
        console.log(email.value, password.value);
        registerUserWithEmailAndPassword({
            email: email.value,
            password: password.value,
            router: router,
            isLoading: isLoading,
            isSuccess: isSuccess,
            isError: isError,
            showError: showError,
            showSuccess: showSuccess
        });

        //reset the input fields
        email.value = '';
        password.value = '';
    }
};

const showSuccess = () => {
  toast.add({
    severity: 'success',
    summary: 'Success',
    detail: 'You have registered successfully!',
    life: 3000,
    closable: true
  });
};

const showError = () => {
  toast.add({
    severity: 'error',
    summary: 'Error',
    detail: 'Error. Please try again!',
    life: 3000,
    closable: true
  });
};
const showValidation = () => {
  toast.add({
    severity: 'warn',
    summary: 'Warning',
    detail: 'Please enter correct details!',
    life: 3000,
    closable: true
  });
};

const registerGoogle = () => {
    signFromGoogle({
        router: router,
        isLoading: isLoading,
        isSuccess: isSuccess,
        isError: isError,
        showError: showError,
        showSuccess: showSuccess
    });
}

</script>

<template>
    <div class="w-full min-h-[calc(100vh-80px)] flex flex-col items-center justify-center p-18 max-sm:p-8 max-xs:p-5">
        <div v-if="isLoading">
            <Loading class="z-50"/>
        </div>
        <Toast position="bottom-right"/>
        <div class="max-w-[500px] mx-auto w-[500px] max-lg:w-[100%] p-10 max-sm:p-8 max-xs:p-5 border-[2px]">
            <div class="flex flex-col gap-[1rem] mb-[1rem]">
                <Header title="Greetings! Create Your New Account."/>
                <Paragraph description="Use your email address and password to create new account"/>
                <input type="email" name="email" v-model="email" placeholder="Email Address" class="py-3 outline-none border-2 border-gray-200 p-2 text-gray-500 text-sm w-full font-light">
                <input type="text" name="password" v-model="password" placeholder="Password" class="py-3 outline-none border-2 border-gray-200 p-2 text-gray-500 text-sm w-full font-light">
                <Button :onClick="registerUser" title="CREATE ACCOUNT" :isFullWidth="true" class="bg-black text-white border-[black]"/>
            </div>
            <hr class="border-[1px] borde-[gray]">
            <div class="flex flex-col gap-[1rem] mt-[1rem]">
                <Paragraph description="Instantly, create new account via Google"/>
                <Button :onClick="registerGoogle" title="CONTINUE WITH GOOGLE" :isFullWidth="true" class="bg-black text-white border-[black]"/>
            </div>
            <div class="mt-[1rem] flex gap-[1rem] items-center">
                <Paragraph description="Already have an account?"/>
                <router-link to="/login">
                    <Paragraph description="Log In" class="underline"/>
                </router-link>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>