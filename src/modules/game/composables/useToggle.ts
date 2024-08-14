import { ref } from 'vue';

export const useToggle = (initialValue = false) => {
  const value = ref(initialValue);
  const toggle = () => {
    console.log('Toggle');
    value.value = !value.value;
  };
  return { value, toggle };
};

// Guarda una instancia de useToggle en un archivo separado para compartir el estado
export const toggleState = useToggle();