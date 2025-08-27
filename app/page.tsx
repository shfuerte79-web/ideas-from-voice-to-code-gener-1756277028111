export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm">
        <h1 className="text-4xl font-bold text-center mb-8">
          Ideas from: Voice-to-Code Generator
        </h1>
        <p className="text-xl text-center text-gray-600 mb-8">
          ```json
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
```
        </p>
        <div className="flex justify-center space-x-4">
          <a 
            href="/auth" 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Get Started
          </a>
          <a 
            href="/dashboard" 
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          >
            Dashboard
          </a>
        </div>
      </div>
    </main>
  )
}