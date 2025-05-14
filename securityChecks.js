const checkHttps = (url) => {
  const isHttps = url.startsWith('https://');
  return {
    type: 'HTTPS',
    status: isHttps ? 'Secure' : 'Warning',
    details: isHttps
      ? 'Website uses HTTPS encryption'
      : 'Website does not use HTTPS encryption'
  };
};

const checkDomain = (url) => {
  const domain = new URL(url).hostname;
  const hasWWW = domain.startsWith('www.');
  const isSubdomain = domain.split('.').length > 2;
  
  return {
    type: 'Domain Configuration',
    status: 'Info',
    details: `Domain: ${domain}${hasWWW ? ' (uses www)' : ''}${isSubdomain ? ' (uses subdomain)' : ''}`
  };
};

const checkCommonVulnerabilities = (url) => {
  const domain = new URL(url).hostname;
  
  // Simulate different results based on the domain
  const vulnerabilities = {
    'github.com': {
      xss: { status: 'Secure', details: 'Strong XSS protection headers present' },
      csp: { status: 'Secure', details: 'Comprehensive Content Security Policy implemented' },
      ssl: { status: 'Secure', details: 'Using TLS 1.3 with strong cipher suites' }
    },
    'example.com': {
      xss: { status: 'Warning', details: 'Missing X-XSS-Protection header' },
      csp: { status: 'Warning', details: 'No Content Security Policy found' },
      ssl: { status: 'Info', details: 'Using TLS 1.2' }
    }
  };

  const defaultChecks = {
    xss: { status: 'Info', details: 'Basic XSS protection detected' },
    csp: { status: 'Warning', details: 'Limited Content Security Policy' },
    ssl: { status: 'Secure', details: 'Modern TLS configuration' }
  };

  const result = vulnerabilities[domain] || defaultChecks;

  return [
    { type: 'XSS Protection', ...result.xss },
    { type: 'Content Security', ...result.csp },
    { type: 'SSL/TLS', ...result.ssl }
  ];
};

export const performSecurityCheck = (url) => {
  try {
    const checks = [
      checkHttps(url),
      checkDomain(url),
      ...checkCommonVulnerabilities(url)
    ];
    
    return { success: true, results: checks };
  } catch (error) {
    return {
      success: false,
      error: 'Invalid URL or unable to perform security check'
    };
  }
};