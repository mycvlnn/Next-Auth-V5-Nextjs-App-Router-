import React from "react";
import CardWrapper from "@/components/auth/card-wrapper";

const LoginForm = () => {
    return (
        <CardWrapper
            headerLabel="Welcome back"
            backButtonLabel="Don't have an account?"
            backButtonHref="/auth/register"
            showSocial
        >
            LoginForm
        </CardWrapper>
    );
};

export default LoginForm;
