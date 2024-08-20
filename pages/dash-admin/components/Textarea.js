const Textarea = ({ className, ...props }) => (
    <textarea
      className={`border border-gray-300 rounded-lg p-2 w-full focus:border-blue-500 focus:outline-none transition-colors ${className}`}
      {...props}
    />
  );
  
  export default Textarea;
  