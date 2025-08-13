'use client'

import { useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import axios from 'axios'

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const checkAuth = async () => {
      const token = Cookies.get('admin_token')
      
      if (!token) {
        setIsAuthenticated(false)
        setLoading(false)
        return
      }

      try {
        const response = await axios.post(`${process.env.API_BASE_URL || '/api'}/verify-token.php`, {
          token
        })
        
        if (response.data.success) {
          setIsAuthenticated(true)
        } else {
          setIsAuthenticated(false)
          Cookies.remove('admin_token')
        }
      } catch (error) {
        setIsAuthenticated(false)
        Cookies.remove('admin_token')
      } finally {
        setLoading(false)
      }
    }

    checkAuth()
  }, [])

  return { isAuthenticated, loading }
}