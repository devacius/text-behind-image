import { User } from "@supabase/auth-helpers-nextjs"

import { Profile } from "@/types";

import { useContext, createContext, useState, useEffect } from "react";

type UserContextType = {
    accessToken: string | null;
    user: User | null;
    userDetails: Profile | null;
    isLoading: boolean;
}

export const UserContext = createContext<UserContextType | undefined>(
    undefined
);

export interface Props {
    [propName: string]: any;
}

export const MyUserContextProvider = (props: Props) => {
    return ;
}

export const useUser = () => {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error('useUser must be used within a MyUserContextProvider')
    }

    return context;
}