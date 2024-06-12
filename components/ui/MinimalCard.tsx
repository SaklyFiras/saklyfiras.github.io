/**
 * v0 by Vercel.
 * @see https://v0.dev/t/KimX3MvgoGn
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Card, CardContent } from "@/components/ui/card"

export default function Component() {
  return (
    <Card className="w-full max-w-md p-6 shadow-lg rounded-lg">
      <CardContent className="text-center space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">Minimalist Design</h2>
        <p className="text-gray-500 dark:text-gray-400">A clean and elegant typographic card with a modern feel.</p>
      </CardContent>
    </Card>
  )
}