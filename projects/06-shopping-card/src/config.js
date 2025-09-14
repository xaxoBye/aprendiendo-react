// export const IS_DEVELOPMENT = process.env.NODE_ENV === 'development' 

export const IS_DEVELOPMENT = import.meta.env.DEV


// import.meta.env.DEV          // true en desarrollo
// import.meta.env.PROD         // true en producción  
// import.meta.env.MODE         // 'development' | 'production'
// import.meta.env.BASE_URL     // URL base de la app
// import.meta.env.SSR          // true si es server-side rendering