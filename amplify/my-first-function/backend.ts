import { defineBackend } from "@aws-amplify/backend";
import { myFirstFunction } from './my-first-function/resource';

defineBackend({
  // Other backend configurations...
  function: {
    myFirstFunction
  }
});

