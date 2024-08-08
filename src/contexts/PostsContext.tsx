import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface UserInfo {
  login: string;
  avatarUrl: string;
  url: string;
  name: string;
  description: string;
  followers: number;
}

interface PostContextType {
  userInfo: UserInfo;
}

export const PostContext = createContext({} as PostContextType)

interface PostProviderProps {
  children: ReactNode
}

const userName = 'mfernandanll'

export function PostContextProvider({ children }: PostProviderProps){
  const [userInfo, setUserInfo] = useState<UserInfo>({
    login: '',
    avatarUrl: '',
    url: '',
    name: '',
    description: '',
    followers: 0,
  });

  async function fetchUserInfo(){
    const response = await api.get(`users/${userName}`)

    const { login, avatar_url, html_url, name, bio, followers } = response.data;
    
    setUserInfo({
      login,
      avatarUrl: avatar_url,
      url: html_url,
      name,
      description: bio,
      followers
    })
  }

  useEffect(() => {
    fetchUserInfo()
  }, [])

  return (
    <PostContext.Provider
      value={{
        userInfo
      }}
    >
      {children}
    </PostContext.Provider>
  )
}