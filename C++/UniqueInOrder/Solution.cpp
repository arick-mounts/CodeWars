#include <string>
#include <vector>

template <typename T> std::vector<T> uniqueInOrder(const std::vector<T>& iterable){
  std::vector<T> output;
    
  //loop through all characters in input
  for (T t : iterable){
    
    if (output.empty()){
      output.push_back(t);
      continue;
    }
    
    if (t != output[output.size()-1])
      output.push_back(t);
    
    
  }
  return output;
}
std::vector<char> uniqueInOrder(const std::string& iterable){
  //your code here
  //Vector of characters to hold output
  std::vector<char> output;
  
  //loop through all characters in input
  for (char c : iterable){
    if (output.empty()){
      output.push_back(c);
      continue;
    }
    if (c != output[output.size()-1])
      output.push_back(c);
    
    
  }
  return output;
}