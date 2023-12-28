
export const loadTheme = () =>  { 
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (localStorage.getItem("theme") === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark')
    } else {
        document.documentElement.classList.remove('dark')
    }
}
  
export const changeTheme = (theme: "dark" | "light") =>  { 
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (theme === 'dark') {
        localStorage.setItem("theme", 'dark')
        document.documentElement.classList.add('dark')
    } else {
        localStorage.setItem("theme", 'light')
        document.documentElement.classList.remove('dark')
    }
}