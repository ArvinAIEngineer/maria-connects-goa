// Environment configuration and validation

interface AppConfig {
  geminiApiKey: string;
  isDevelopment: boolean;
  isProduction: boolean;
  version: string;
}

// Validate required environment variables
const validateEnvironment = (): AppConfig => {
  const geminiApiKey = import.meta.env.VITE_GEMINI_API_KEY;
  const nodeEnv = import.meta.env.NODE_ENV || 'development';
  const version = import.meta.env.VITE_APP_VERSION || '1.0.0';

  // Validation errors
  const errors: string[] = [];

  if (!geminiApiKey) {
    errors.push('VITE_GEMINI_API_KEY is required');
  } else if (geminiApiKey.length < 20) {
    errors.push('VITE_GEMINI_API_KEY appears to be invalid (too short)');
  }

  if (errors.length > 0) {
    const errorMessage = `Environment configuration errors:\n${errors.join('\n')}`;
    console.error('❌ Configuration Error:', errorMessage);
    
    if (nodeEnv === 'production') {
      throw new Error(errorMessage);
    } else {
      console.warn('⚠️ Development mode: continuing with invalid configuration');
    }
  }

  return {
    geminiApiKey,
    isDevelopment: nodeEnv === 'development',
    isProduction: nodeEnv === 'production',
    version,
  };
};

// Export validated configuration
export const config = validateEnvironment();

// Configuration status check
export const isConfigValid = (): boolean => {
  try {
    validateEnvironment();
    return true;
  } catch {
    return false;
  }
};

// Get configuration with fallbacks
export const getConfig = (): AppConfig => {
  if (!isConfigValid() && config.isProduction) {
    throw new Error('Invalid configuration in production environment');
  }
  return config;
};

// Environment helpers
export const isDev = config.isDevelopment;
export const isProd = config.isProduction;
export const version = config.version;
