"use client";

import { useRouter } from "next/navigation";
import React from "react";

interface IProps {
    children: React.ReactNode;
    mode?: "modal" | "redirect";
    asChild?: boolean;
}

const LoginButton: React.FC<IProps> = ({ children, mode = "redirect", asChild }) => {
    const router = useRouter();

    const onClick = () => {
        console.log("Clicked");
        router.push("/auth/login");
    };

    if (mode === "modal") {
        return <span>TODO: Implement modal</span>;
    }

    return (
        <span className="cursor-pointer" onClick={onClick}>
            LoginButton
        </span>
    );
};

export default LoginButton;
