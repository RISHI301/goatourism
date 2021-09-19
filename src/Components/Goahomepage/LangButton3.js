
import React from 'react';
import Link from '@material-ui/core/Link';

export default function KonkaniLink() {
  return (
    <Link
      component="button"
      variant="body2"
      onClick={() => {
        console.info("Konkani");
      }}
    >
      Konkani
    </Link>
  );
}
