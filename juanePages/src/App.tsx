import { ThemeProvider } from "@/components/theme-provider"
import PostDetails from "./pages/PostDetails"



function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <PostDetails/>
    </ThemeProvider>
  )
}

export default App
