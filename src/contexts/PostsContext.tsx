import { ReactNode, useCallback, useEffect, useState } from "react";
import { createContext } from 'use-context-selector'
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

export interface IssueByNumber extends Issue{
  number: number;
  repository: string;
  comments: number;
  userName: string;
}

interface PostContextType {
  userInfo: UserInfo;
  issues: Issue[];
  fetchIssues: (query: string) => Promise<void>;
  fetchIssueByNumber: (issueNumber: number) =>  Promise<IssueByNumber>;
}

export const PostContext = createContext({} as PostContextType)

interface PostProviderProps {
  children: ReactNode
}

const GITHUB_USER = 'mfernandanll'
const REPO_NAME = 'github-blog'

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

  const fetchUserInfo = useCallback(
    async() => {
      const response = await api.get(`users/${GITHUB_USER}`)
  
      const { login, avatar_url, html_url, name, bio, followers } = response.data;
      
      setUserInfo({
        login,
        avatarUrl: avatar_url,
        url: html_url,
        name,
        description: bio,
        followers
      })
    },
    []
  )

  const fetchIssues = useCallback(
    async (query: string = '') => {
      const response = await api.get(`search/issues?q=${query}+repo:${GITHUB_USER}/${REPO_NAME}`)  
     
      const formatedIssues = response.data.items.map((item: ApiItem) => {
        return {
          number: item.number,
          title: item.title,
          description: item.body,
          createdAt: item.created_at,
        }
      })
  
      setIssues(formatedIssues);            
    },
    []
  )

  const fetchIssueByNumber = useCallback(
    async (issueNumber: number) => {
      const response = await api.get(`repos/${GITHUB_USER}/${REPO_NAME}/issues/${issueNumber}`)
  
      const formatedIssue: IssueByNumber = {
        number: issueNumber,
        title: response.data.title,
        description: response.data.body,
        createdAt: response.data.created_at,
        repository: response.data.html_url,
        comments: response.data.comments,
        userName: response.data.user.login
      }
  
      return formatedIssue
    },
    []
  )

  useEffect(() => {
    fetchUserInfo()
    fetchIssues()
  }, [])

  return (
    <PostContext.Provider
      value={{
        userInfo,
        issues,
        fetchIssues,
        fetchIssueByNumber
      }}
    >
      {children}
    </PostContext.Provider>
  )
}