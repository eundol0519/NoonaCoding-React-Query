import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchPosts = () => {
    return axios.get(`http://localhost:5000/posts`);
};

export const usePostQuery = () => {
    return useQuery({
        queryKey: ["posts"],
        queryFn: fetchPosts,
        select: (data) => {
            return data.data;
        },
        retry: 1, // 재요청 횟수 | default : 3번
        // gcTime: 5000, // garbage collection time (이미 캐시된 데이터를 얼마나 유지할 지) | default : 5m
        // staleTime: 5000, // 데이터의 유통기한 설정 (설정 시간에 따라 fresh였다가 stale로 변함, 얼마나 자주 fetch 할 지) | default : 0s
        // 🤔 staleTime보다 gcTime이 짧으면 (데이터는 fresh한 상태(api 요청할 필요 없음)인데 cache가 없다면) 어쩔 수 없이 다시 api를 요청한다.
        // > staleTime < gcTime이어야 한다.
        // refetchInterval: 3000, // 데이터를 얼마나 자주 호출할 것인가 (ex. 3초마다 api 요청)
        // refetchOnMount: false, // component mount 시 api를 호출할 것인가 (처음에는 호출되고, 그 뒤부터 mount 시에) | default : true
        // refetchOnWindowFocus: true, // 다른 창에서 해당 window 창을 호출할 때 api를 재호출할 것인지 (→ 사용자가 항상 최신 데이터를 볼 수 있음) | default : false
        // enabled: false, // 호출 시점 설정 가능 (false이면 아예 호출 X, !!anotherData이면 anotherData가 없을 때 호출되도록, anotherData면 anotherData가 있을 때 호출되도록 등등) | default : true
    });
}

export const fetchPostDetail = (postId) => {
    return axios.get(`http://localhost:5000/posts/${postId}`);
};