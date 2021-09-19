
import React from 'react';
import Link from '@material-ui/core/Link';

export default function HindiLink() {
  return (
    <Link
      component="button"
      variant="body2"
      onClick={() => {
        console.info("Hindi");
      }}
    >
      Hindi
    </Link>
  );
}
