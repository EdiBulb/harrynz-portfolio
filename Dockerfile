# 1단계: Build the React app
FROM node:20 AS build

WORKDIR /app

# 의존성 먼저 복사 -> 캐시 최적화
COPY package*.json ./
# npm ci가 더 재현성 좋고 빠름 (package-lock.json 있는 경우)
RUN npm ci || npm install

# 소스 복사
COPY . .
# 빌드 시 힙 메모리 넉넉히
ENV NODE_OPTIONS="--max-old-space-size=1024"

# 프로덕션 빌드
RUN npm run build

# 2단계: Nginx로 정적 파일 서빙
FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
