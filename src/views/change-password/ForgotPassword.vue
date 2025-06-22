<script setup lang="ts">
import { ref } from 'vue';
import Button from '../../components/button/Button.vue';
import Header from '../../components/header/Header.vue';
import Paragraph from '../../components/paragraph/Paragraph.vue';
import updatePassword from '../../services/updatePassword/updatePassword';
import { useToast } from 'primevue';
import Toast from 'primevue/toast';
import Loading from '../../components/loading/Loading.vue';

const toast = useToast();

const email = ref<string>('');

const isError = ref<boolean>(false);
const isSuccess = ref<boolean>(false);
const isLoading = ref<boolean>(false);

const sentResetEmail = () => {
    if(email.value.trim() === '') {
        showValidation();
    } else {
        updatePassword({
            email: email.value,
            isError: isError,
            isLoading: isLoading,
            isSuccess: isSuccess,
            showSuccess: showSuccess,
            showError: showError
        });
    }
}

const showSuccess = () => {
  toast.add({
    severity: 'success',
    summary: 'Success',
    detail: 'Email sent successfully!',
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
    detail: 'Please enter valid email!',
    life: 3000,
    closable: true
  });
};

</script>

<template>
    <div class="w-full min-h-[calc(100vh-80px)] flex flex-col items-center justify-center p-18 max-sm:p-8 max-xs:p-5">
        <div v-if="isLoading">
            <Loading class="z-50"/>
        </div>
        <Toast position="bottom-right"/>
        <div class="max-w-[500px] mx-auto w-[500px] max-lg:w-[100%] p-10 max-sm:p-8 max-xs:p-5 border-[2px]">
            <div class="flex flex-col gap-[1rem] mb-[1rem]">
                <Header title="Reset Your Password"/>
                <Paragraph description="Please provide your email address below to receive a code for restoring access to your account"/>
                <Paragraph description="Enter your mobile number"/>
                <input type="email" name="email" v-model="email" placeholder="Email Address" class="py-3 outline-none border-2 border-gray-200 p-2 text-gray-500 text-sm w-full font-light">
                <Button :onClick="sentResetEmail" title="SEND PASSWORD RESET EMAIL" :isFullWidth="true" class="bg-black text-white border-[black]"/>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>