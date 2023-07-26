async function retrieveSolution(id, time) {
    //for (let i = 0; i < 500; i += 200) {
    return fetch("https://leetcode.com/graphql/", {
        "headers": {
            "content-type": "application/json",
            "cookie": "LEETCODE_SESSION=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfYXV0aF91c2VyX2lkIjoiNDQ2NTM0MyIsIl9hdXRoX3VzZXJfYmFja2VuZCI6ImFsbGF1dGguYWNjb3VudC5hdXRoX2JhY2tlbmRzLkF1dGhlbnRpY2F0aW9uQmFja2VuZCIsIl9hdXRoX3VzZXJfaGFzaCI6IjI2NGI0NjliNDA2NTc2MWNmNzBkMmQ1MjcwNWZiMjRjMzZjNDQzMTIiLCJpZCI6NDQ2NTM0MywiZW1haWwiOiJhbmR5LnYudm8yMDA0QGdtYWlsLmNvbSIsInVzZXJuYW1lIjoidXNlcjMzODNWIiwidXNlcl9zbHVnIjoidXNlcjMzODNWIiwiYXZhdGFyIjoiaHR0cHM6Ly9hc3NldHMubGVldGNvZGUuY29tL3VzZXJzL3VzZXIzMzgzVi9hdmF0YXJfMTYyNDMwNzczMy5wbmciLCJyZWZyZXNoZWRfYXQiOjE2ODg1MjIxODQsImlwIjoiMjYwMDoxNzAwOjNmYTA6OWE0MDoxMDQxOjg4ODc6NmY3OjFjYTMiLCJpZGVudGl0eSI6IjE0ZDU4YTFiYTI4NmYwODdkOTczNjI0OWVjNzg1MzE0Iiwic2Vzc2lvbl9pZCI6NDEzOTE5ODB9.aebPW8IlaW0wjvK7MiA5D6JhYQjaCHZ67mujdsYJ1Zs"
        },
        "method": "POST",
        "body": "{\"query\":\" query codeWithRuntime($questionId: Int!, $lang: String!, $runtime: Int!, $skip: Int!) { codeWithRuntime( questionId: $questionId lang: $lang runtime: $runtime skip: $skip ) { code hasPrevious hasNext }} \",\"variables\":{\"questionId\":" + id + ",\"lang\":\"java\",\"skip\":0,\"runtime\":" + time + "},\"operationName\":\"codeWithRuntime\"}"
    })
        .then(res => res.json())
        .then(data => console.log(data.data.codeWithRuntime))
    //{
    //if (data.data.codeWithRuntime != null) {
    //    console.log(data);
    //    i = 1000;
    //}
    //});

}

function randomQuestion() {
    fetch("https://leetcode.com/graphql/", {
        "headers": {
            "content-type": "application/json",
            "Referer": "https://leetcode.com/problemset/all/"
        },
        "body": "{\"query\":\" query randomQuestion($categorySlug: String, $filters: QuestionListFilterInput) { randomQuestion(categorySlug: $categorySlug, filters: $filters) { titleSlug }} \",\"variables\":{\"categorySlug\":\"\",\"filters\":{}},\"operationName\":\"randomQuestion\"}",
        "method": "POST"
    })
        .then(res => res.json())
        .then(data => {
            const title = data.data.randomQuestion.titleSlug;
            console.log(data);
            retrieveContent(title);
            retrieveId(title);
        });
}

function retrieveContent(title) {
    fetch("https://leetcode.com/graphql/", {
        "headers": {
            "content-type": "application/json",
            "Referer": "https://leetcode.com/problems/two-sum/description/"
        },
        "body": "{\"query\":\" query questionContent($titleSlug: String!) { question(titleSlug: $titleSlug) { content mysqlSchemas }} \",\"variables\":{\"titleSlug\":\"" + title + "\"},\"operationName\":\"questionContent\"}",
        "method": "POST"
    })
        .then(res => res.json())
        .then(data => console.log(data));
}

function retrieveId(title) {
    fetch("https://leetcode.com/graphql/", {
        "headers": {
            "content-type": "application/json",
            "Referer": "https://leetcode.com/problems/two-sum/description/"
        },
        "body": "{\"query\":\"\ query questionNote($titleSlug: String!) {\ question(titleSlug: $titleSlug) {\ questionId\ note\ }\ }\ \",\"variables\":{\"titleSlug\":\"" + title + "\"},\"operationName\":\"questionNote\"}",
        "method": "POST"
    })
        .then(res => res.json())
        .then(data => {
            const num = data.data.question.questionId;
            console.log(data);
            for (let i = 0; i < 1000; i = i * 2) {
                retrieveSolution(num).then(sol => {
                    if (sol.data.codeWithRuntime != null)
                        console.log(sol)
                });
            }
        });
}

randomQuestion();
retrieveSolution(1, 0);
retrieveContent("two-sum");
console.log(correctTitle("two-sum"));