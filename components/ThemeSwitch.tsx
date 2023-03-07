import { FC, PropsWithChildren, useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

const SvgWrapper: FC<PropsWithChildren<{}>> = ({ children }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="w-2/5 h-2/3 text-gray-900 dark:text-gray-100"
  >
    {children}
  </svg>
)

const LightModeIcon = () => (
  <path
    fillRule="evenodd"
    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
    clipRule="evenodd"
  />
)

const DarkModeIcon = () => (
  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
)

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])

  return (
    mounted && (
      <label
        aria-label="Toggle Dark Mode"
        className="relative inline-flex items-center cursor-pointer"
      >
        <input
          type="checkbox"
          value=""
          className="sr-only peer"
          onClick={() => setTheme(theme === 'dark' || resolvedTheme === 'dark' ? 'light' : 'dark')}
        />
        <div className="w-14 h-7 flex items-center justify-evenly bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600">
          <SvgWrapper>
            <LightModeIcon />
          </SvgWrapper>
          <SvgWrapper>
            <DarkModeIcon />
          </SvgWrapper>
        </div>
      </label>
    )
  )
}

export default ThemeSwitch
