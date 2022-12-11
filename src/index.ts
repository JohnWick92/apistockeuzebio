import dotenv from 'dotenv'
import app from './app'

dotenv.config()

app.listen(process.env.PORT || 5000, () => {
  console.log(`🚀 Server running on port ${process.env.PORT || 5000} 🚀`)
})
