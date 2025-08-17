// YouTube URL → embed URL : 이 코드는 URL을 임베드로 형성하는 코드임

export const getYouTubeEmbed = (url) => {
  try {
    const u = new URL(url); // URL 생성자, 문자열을 URL 객체로 파싱함
    const host = u.hostname; // 도메인만 추출함
    if (host.includes("youtu.be")) { // 도메인 포함 여부 판별
      return `https://www.youtube.com/embed/${u.pathname.replace("/", "")}`;
    }
    if (host.includes("youtube.com")) { // 일반 Youtube 도메인 처리
      const id = u.searchParams.get("v"); // 도메인의 v 파라미터값을 가져옴
      if (id) return `https://www.youtube.com/embed/${id}`; // v 값이 있으면 임베드 형성
    
      // 쇼츠인 경우 처리함
      if (u.pathname.startsWith("/shorts/")) { 
        const pid = u.pathname.split("/")[2];
        if (pid) return `https://www.youtube.com/embed/${pid}`;
      }
    }
  } catch (_) {}
  return null;
};

// 간단 확장자 체크
export const isVideoFile = (url = "") => /\.(mp4|webm|ogg)(\?.*)?$/i.test(url);
