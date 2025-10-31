import API from "../api";

const getVideoComments = async (videoId) => {
    const commentRes = await fetch(`https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${videoId}&maxResults=100&key=${API}`);
    const commentData = await commentRes.json();
    
    if (commentData.items && commentData.items.length > 0) {
        return commentData.items.map(comment => {
            const topComment = comment.snippet.topLevelComment.snippet;
            
            return {
                id: comment.id,
                author: topComment.authorDisplayName,
                text: topComment.textDisplay,
                likeCount: topComment.likeCount,
                publishedAt: topComment.publishedAt,
                authorProfileImage: topComment.authorProfileImageUrl // ✅ Added profile image
            };
        });
    } else {
        return [];
    }
}

export default getVideoComments