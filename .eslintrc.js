module.exports = {
  extends: 'next/core-web-vitals',
  rules: {
    'react-hooks/exhaustive-deps': 0, // issue: https://github.com/facebook/react/issues/14920
    '@next/next/no-img-element': 0, // issue: https://nextjs.org/docs/messages/no-img-element
  },
};
