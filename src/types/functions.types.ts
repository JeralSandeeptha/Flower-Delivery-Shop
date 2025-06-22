import type { Ref } from "vue"
import type { Router } from "vue-router"

export type GetFlowersProps = {
    
} 

export type GetFlowerProps = {
    
} 

export type RegisterUserWithEmailAndPassword = {
    email: string,
    password: string,
    router: Router,
    isLoading: Ref<boolean>,
    isSuccess: Ref<boolean>,
    isError: Ref<boolean>,
    showSuccess: () => void,
    showError: () => void,
}

export type RegisterUserWithGoogle = {
    router: Router,
    isLoading: Ref<boolean>,
    isSuccess: Ref<boolean>,
    isError: Ref<boolean>,
    showSuccess: () => void,
    showError: () => void,
}

export type SignInWithUsernamePassword = {
    email: string,
    password: string,
    router: Router,
    isLoading: Ref<boolean>,
    isSuccess: Ref<boolean>,
    isError: Ref<boolean>,
}

export type UpdatePassword = {
    email: string,
}

export type GetFlower = {
    id: string,
}