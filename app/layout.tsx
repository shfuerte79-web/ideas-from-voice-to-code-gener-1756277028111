import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ideas from: Voice-to-Code Generator',
  description: '```json
[
  {
    "title": "Voice-Driven Debugging Assistant",
    "description": "أداة تستخدم الأوامر الصوتية لمساعدة المطورين في تصحيح الأخطاء في الكود من خلال توجيههم خطوة بخطوة.",
    "mvp_plan": "إنشاء واجهة بسيطة تسمح للمستخدمين بإدخال أوامر صوتية لتحديد الأخطاء. استخدام نموذج ذكاء اصطناعي لتحليل الأخطاء الشائعة وتقديم اقتراحات تصحيح."
  },
  {
    "title": "Voice-to-API Integration Tool",
    "description": "أداة لتحويل الأوامر الصوتية إلى استدعاءات API، مما يسهل على المطورين التفاعل مع واجهات برمجة التطبيقات بدون كتابة كود.",
    "mvp_plan": "تطوير نموذج أولي يتيح للمستخدمين إدخال أوامر صوتية مثل 'احصل على بيانات المستخدم' وتحويلها إلى استدعاء API. استخدام مكتبة بسيطة للتفاعل مع واجهات API."
  },
  {
    "title": "Voice-Activated Code Documentation Generator",
    "description": "أداة لإنشاء وثائق الكود تلقائيًا من خلال الأوامر الصوتية، مما يساعد المطورين على توثيق مشاريعهم بشكل أسرع.",
    "mvp_plan": "إنشاء واجهة مستخدم تسمح للمطورين بإدخال أوامر صوتية مثل 'وثق دالة X'، واستخدام نموذج ذكاء اصطناعي لتحليل الكود وإنشاء وثائق مناسبة."
  }
]
```',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>{children}</main>
      </body>
    </html>
  )
}