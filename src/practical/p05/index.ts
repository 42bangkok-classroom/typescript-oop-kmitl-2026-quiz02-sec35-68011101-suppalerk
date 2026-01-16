export interface Comment  {
  id : number ;
  body : string;
}

async function safeFetchComment(commentId: number) {
  try {
    if (commentId <= 0) {
      return null;
    }

    const feedback = await fetch("https://jsonplaceholder.typicode.com/comments/" + commentId);

    if (feedback.ok === false) {
      return null;
    }
    const comment = await feedback.json();

    return {
      id: comment.id,
      body: comment.body
    };
  } catch {
    return null;
  }
}

console.log(safeFetchComment(1))
console.log(safeFetchComment(9999))
console.log(safeFetchComment(-1))
//console.log(safeFetchComment(null))
//console.log(safeFetchComment(undefined))