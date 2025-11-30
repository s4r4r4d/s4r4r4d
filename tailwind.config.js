/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
                          colors: {
                            'text-primary': '#333333',
                            'text-secondary': '#666666',
                            'text-light': '#757575',
                            'background-main': '#fafafa',
                            'background-footer': '#f5f5f5',
                            'border-light': '#dddddd',
                            'border-medium': '#e0e0e0',
                            'border-dark': '#B8B8B8',
                            'pie-designer': '#B8B8B8',
                            'pie-developer': '#3F3F3F',
                            'skill-js': '#4BC6B9',
                            'skill-ts': '#EF8354',
                            'skill-vue': '#EE4B6A',
                            'skill-next': '#DF3B57',
                            'skill-angular': '#0F7173',
                            'skill-figma': '#7fd1b9',
                            'noticeai-primary': '#e6358d',
                            'noticeai-dark-gray': '#212121',
                            'noticeai-secondary': '#4f3442',
                                        'noticeai-light-text': '#edf1f2',
                                        'noticeai-borders': '#DDDDDD',
                                        'rituals-primary': '#e9e8e1',
                                        'rituals-light-beige': '#f2f3ee',
                                        'rituals-dark-green': '#3f4a3d',
                                        'rituals-text-light': '#a0a0a0',
                                      },    },
  },
  plugins: [],
};
