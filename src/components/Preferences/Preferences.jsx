import React, {useEffect} from 'react';

export default function Preferences({ title }) {
    useEffect(() => {
        document.title = title || "React App";
    }, [title]);
  return(
    <h2>Preferences</h2>
  );
}