This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Database

# Database Adapters

Link: https://authjs.dev/reference/adapter/prisma

# Neon: Serverless Postgres

Neon là một dịch vụ serverless Postgres được quản lý hoàn toàn. Nó sử dụng sức mạnh của Postgres, một hệ quản trị cơ sở dữ liệu quan hệ mã nguồn mở phổ biến, và cung cấp một số lợi ích:

**Serverless:**

Không cần phải lo lắng về việc cung cấp và quản lý máy chủ.
Chỉ thanh toán cho những tài nguyên mà bạn sử dụng.
**Postgres:**

Độ tin cậy cao.
Khả năng mở rộng tốt.
Tập hợp tính năng phong phú.
Đã được quản lý hoàn toàn:

Neon xử lý tất cả các công việc phức tạp trong việc quản lý cơ sở dữ liệu Postgres, bao gồm sao lưu, nâng cấp và bảo mật.
Mức miễn phí hào phóng:

Dễ dàng sử dụng cho các dự án cá nhân hoặc thử nghiệm trước khi cam kết.
**Lợi ích chính của Neon:**

Tự động mở rộng: Neon tự động mở rộng tài nguyên tính toán dựa trên nhu cầu của ứng dụng bạn.
Phân nhánh: Neon cho phép phân nhánh cơ sở dữ liệu dễ dàng, rất hữu ích cho các quy trình phát triển như tạo các nhánh riêng biệt để thử nghiệm và triển khai.
Lưu trữ không giới hạn: Neon mở rộng dung lượng lưu trữ độc lập với tính toán.
**Neon phù hợp với ai?**

Các nhà phát triển muốn tận dụng sức mạnh của Postgres mà không cần quản lý máy chủ.
Cần một giải pháp cơ sở dữ liệu có thể mở rộng và tiết kiệm chi phí.
Đánh giá cao tính linh hoạt của phân nhánh cơ sở dữ liệu cho phát triển.
Đang xây dựng các ứng dụng có khối lượng dữ liệu lớn tiềm năng.

# Tổng hợp các câu lệnh liên quan đến Prisma trong project

11734 npm i -D prisma
11736 npm i @prisma/client
11737 npx prisma init
11741 npm i @auth/prisma-adapter
11783 npx prisma studio
11784 npx prisma generate
11785 npx prisma migrate reset
11786 npx prisma db push
