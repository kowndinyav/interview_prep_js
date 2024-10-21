## My fumble

When we find that `(a[i]+a[l]+a[r]) < target_sum` it means, we know that all other `a[i] + a[l] + a[x] < target_sum where l < x < r`. In this case, we can just increment the count by `(r-l)` <br>

This means, for a corresponding `(i, l)` tuple we found more than one count and this `would be treated as one iteration only`. This is a catch!!!! <br> 

If we don't add `(l-r)` in one go, it becomes a n*n loop and we end up in O(N*N*N) solution

