
import React from 'react';
import Link from '@material-ui/core/Link';

export default function EnglishLink() {
  return (
    <Link
      component="button"
      variant="body2"
      onClick={() => {
        console.info("English");
      }}
    >
      English
    </Link>
  );
}
