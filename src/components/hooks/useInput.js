import { useState, useCallback } from "react";

export default function useInput() {
  const [value, setValue] = useState("");

  const handleChange = useCallback((event) => {
    setValue(event.target.value);
  }, []);

  return [value, handleChange, setValue];
}
