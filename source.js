function FindPivot(arr, st, end){
    // the pivot is usually the last number in the array
    let pivot = arr[end];
    let i = st;
    let j = st;
    // the pointer starts from index 0

    while(st<=end){
    // if value is lesser than pivot swap i and j
    if(arr[i]<pivot){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;

    j++;
    

}
    i++;
}
    
    let temp = arr[end];
    arr[end] = arr[j];
    arr[j] = temp;
    return j; // this is our pivot index since we are swapping the last number with j
}
function sort(arr, st, end){
   // the base condition when the start index is greater or equal to end.
    if (st>=end){
        return;
    }
    // the pivot index stores the index of the j pointer returned from the findpivot function
    let PivotIndex = FindPivot(st,end,arr);
    
    // the array is sorted on the left side
    sort(arr,st,PivotIndex-1);
    // the array is sorted on the right ai
    sort(arr,PivotIndex-1,end);
}

function QuickSort(n, arr){
    sort(arr, 0, n-1);

    return arr;
}

function MergeIntervals(n,Intervals){
    // first sort the first index of each array in increasing order
    Intervals.sort(a,b => a[0]- b[0]);
    // create an empty array to store the result array 
    let result = [];
    // initialise two variables, store the first and last index of the first array
    let st = Intervals[0][0];
    let end = Intervals[0][1];

    // run a for loop through the interval array, by checking the first Index of each array
    for(let i=1; i<Intervals.length; i++){
        // this condition checks if the first index is less than the second index with in the same array
        if(Intervals[i][0]<=end){
         // end is updated over each iteration, it compares the last index of two adjacent arrays  
        end = Math.max(end, Intervals[i][1]);
        } else{
            // if the above condition fails,start index remain the same, only the updated end index value up to this point, are pushed in to result array
            result.push([st, end]);
            // now this will be the new start and end values 
            st = Intervals[i][0];
            end = Intervals[0][i];
        }
       
    }
    // then the last interval is finally pushed when it comes out of the loop
    result.push([st, end]);
    return result;
}

 function SpiralMatrix(n){

    let mat = new Array(n);
    for(let i=0; i<n; i++){
        mat[i] =  new Array(n);
    }
        let val = 1;
        let top = 0, bottom = n-1, left = 0, right = n-1;
        
        while (left<=right && top<=bottom){
            // fill the values
            for(let col = left; col<=right; col++){
                mat[top][col] = val++;
            } 
                top++;
            for (let row = top; row<=bottom; row++){
                mat[row][right] = val++;
            }
                right--;
            for (let col = right; col>=left; col--){
                mat[bottom][col] = val++;
            }
                bottom--;
             for (let row = bottom; row>=top; row--){
                mat[row][left] = val++;
            }
                left++;
        }
        return mat;
    }




function BuyandSellStocks(prices){
    let profit = 0;

    for(let i=0; i<prices.length-1; i++){

        if(prices[i+1]>prices[i]) {
            profit += prices[i+1]-prices[i]
        }
    }
    return profit;
}

function Palindrome(s){

    // 1.first create a map and count each characters to store them in variable count
    let map = new Map();
    for(let i =0; i<s.length; i++){
    let oldcnt = map.get(s[i]) || 0;
    map.set(s[i], oldcnt+1);
    }

    //2. now iterate over the map to check if the count is odd
    let odd = 0;
    for(let[key, freq] of map.entries()){
        if(freq%2==1){
            odd++;

        }
    }
    if (odd<=1){
        return true;
    } else{
        return false;
    }
}

function BubbleSort(arr){
   let n = arr.length;
    for (let i=0; i<n-1; i++){
        for (let j=0; j<n-i-1; j++){
            if(arr[j+1]>arr[j]){
                let temp = arr[j];
                arr[j]=arr[j+1];
                temp = arr[j+1];
            }
        }
    }
    return arr;
}

function InsertionSort(arr){
    let n = arr.length;
    for (let i=1; i<n; i++){
        let key = arr[i];
        let j = i-1;
        while(j>=0 && arr[j]>key){
            arr[j+1] = arr[j]; 
            j--;
        }
        arr[j+1] = key;
    }
    return arr;


}

function BubbleSort(arr){
    let n = arr.length;
    for(let i=0; i<n; i++){
        for (let j=0; j<n-i-1; j++){
            if(arr[j+1]>arr[j]){
                let temp = arr[j];
                arr[j]=arr[j+1];
                temp = arr[j+1];
            }
        }
    }
}

function SelectionSort(arr){
    let n = arr.length;
    for (let i=0; i<n; i++){
        let minIndex = i;
        for(let j=i+1; j<n; j++){
            if(arr[j]<arr[minIndex]){
                minIndex = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = arr[i];
    }
    return arr;

}
// create a helper function for total time taken
function gettotalHours(arr, speed){
    //initialise a variable to store the total time
    let totalhours = 0;
    // iterate through the piles of books in the array
    for(let i =0; i<arr.length; i++){
        // for each iteration calculate the time taken to read and add it in totalhours
        totalhours += Math.ceil(arr[i]/speed);
    }
    return totalhours;
}

function bookReading(n,hours,arr){
    let l = 1;
    let r = Math.max(...arr);
    let ans = r;

    while(l<=r){
        let mid = Math.floor((l+r)/2);
        let hours = gettotalHours(arr, mid);

        if(totalhours<=hours){
            ans = mid;

             r = mid-1;
        } else{
             l = mid+1;
        }
    }
    return ans;

}

function RotatedArray(nums, target){
    let l = 0, r = nums.length-1;

    while(l<=r){
        if(nums[mid]===target){
            return mid;
        } if(nums[l]<=nums[mid]){
            if(nums[l]<=target && nums[mid]>target){
                r = mid-1;
            } else{
                l = mid+1;
            }

        }
        else{
            if(nums[mid]<target && target<=nums[r]){
                l = mid+1; 
            } else{
                r = mid-1;
            }
        }
    }
    return -1;
}
function PeakIndex(nums,N){
    let left = 0;
    let right = nums.length-1;
    
    while(left<right){
        let mid = ((left+right)/2);
        
        if(nums[mid]>nums[mid+1]){
            right = mid;
        } else {
            left = mid+1;
        }

    }
    return left;
}

function SetBit(number, x){
    return ( number | (BigInt(1) << BigInt(x)));

}
function ReverseBit(n){
    let ans = 0n;
    for(let i = 0; i<32; i++){
        if (n & 1== 1){
        ans =  SetBit(ans, 31-i);
        }
        {
            n = BigInt(n>>1);
        }

    }
    return ans;

}

function SetBit(number,x){
    return (number | BigInt9(1n) << BigInt(x));
}

function ReverseInteger(n){
    let ans = 0n;
    for (let i = 0; i<32; i++){
        if(n & 1 == 1){
            ans = SetBit(ans,31-i);
        } {
           n = BigInt(n >> 1n); 
        }
    }
    return ans;
}

function Kthsmallestelement(matrix, x){
    let n = matrix.length;
    let row = 0;
    let col = n-1;
    let count = 0;
    
    while (row < n && col>0){
        if(matrix[row][col] <= x){
            count += col+1;
            row++;
        } else {
            col--;

        }
        return count;

    }

}

