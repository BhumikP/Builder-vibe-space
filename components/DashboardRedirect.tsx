'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface DashboardRedirectProps {
  delay?: number; // Delay in milliseconds before redirect
  showLoading?: boolean; // Whether to show loading state
}

const DashboardRedirect: React.FC<DashboardRedirectProps> = ({ 
  delay = 0, 
  showLoading = true 
}) => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/dashboard');
    }, delay);

    return () => clearTimeout(timer);
  }, [router, delay]);

  if (!showLoading) {
    return null;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Redirecting to Frame Customizer...</p>
      </div>
    </div>
  );
};

export default DashboardRedirect; 