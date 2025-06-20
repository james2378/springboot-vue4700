const base = {
    get() {
                return {
            url : "http://localhost:8080/springboot6r8mn/",
            name: "springboot6r8mn",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springboot6r8mn/front/index.html'
        };
            },
    getProjectName(){
        return {
            projectName: "体质测试数据分析及可视化设计"
        } 
    }
}
export default base
