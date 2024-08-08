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

interface ApiItem {
  number: number;
  title: string;
  body: string;
  created_at: string;
}

export interface Issue {
  number: number;
  title: string;
  description: string;
  createdAt: string;
}

interface PostContextType {
  userInfo: UserInfo;
  issues: Issue[];
  fetchIssues: (query: string) => Promise<void>;
}

export const PostContext = createContext({} as PostContextType)

interface PostProviderProps {
  children: ReactNode
}

const userName = 'mfernandanll'
const repository = 'github-blog'

export function PostContextProvider({ children }: PostProviderProps){
  const [userInfo, setUserInfo] = useState<UserInfo>({
    login: '',
    avatarUrl: '',
    url: '',
    name: '',
    description: '',
    followers: 0,
  });

  const [issues, setIssues] = useState<Issue[]>([]);

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

  async function fetchIssues(query: string = ''){
    const response = await api.get(`search/issues?q=${query}+repo:${userName}/${repository}`)  
   
    const formatedIssues = response.data.items.map((item: ApiItem) => {
      return {
        number: item.number,
        title: item.title,
        description: item.body,
        createdAt: item.created_at,
      }
    })

    setIssues(formatedIssues);            
  }

  useEffect(() => {
    fetchUserInfo()
    fetchIssues()
  }, [])

  return (
    <PostContext.Provider
      value={{
        userInfo,
        issues,
        fetchIssues
      }}
    >
      {children}
    </PostContext.Provider>
  )
}