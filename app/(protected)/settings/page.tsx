import React from "react";

import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";

const SettingsPage = async () => {
    const session = await auth();

    return (
        <div>
            <pre>{JSON.stringify(session, undefined, 10)}</pre>

            <form
                action={async () => {
                    "use server";
                    await signOut();
                }}
            >
                <Button type="submit">Logout</Button>
            </form>
        </div>
    );
};

export default SettingsPage;
