function findNeighbors(node, matrix) {
    let neighbors = [];
    let row = node[0];
    let col = node[1];
    // Up
    if (row > 0) {
        neighbors.push([row - 1, col])
    }
    // Down
    if (row < matrix.length - 1) {
        neighbors.push([row + 1, col])
    }
    // Left
    if (col > 0) {
        neighbors.push([row, col - 1]);
    }
    // Right
    if (col < matrix[row].length - 1) {
        neighbors.push([row, col + 1]);
    }
    return neighbors;
}

function bfsPath(matrix, startNode, endValue) {
    const queue = [startNode];
    const arr = [];
    // we want the string version since we're using it to compared to endvalue which is a number 
    let stringVersion = startNode.toString();
    let visited = new Set().add(stringVersion);
    while (queue.length) {
        let currentNode = queue.shift();
        arr.push(currentNode);
        // set a condition to end the search once we find the value that matches endvalue
        // since currentnode equals to [row, col], we know there's only 2 indices, so we can 
        // use matrix of that node to compare it with our endvalue 
        if (matrix[currentNode[0]][currentNode[1]] === endValue) return arr;
        // neighbor holds the result of the neighbors helper function 
        let neighbors = findNeighbors(currentNode, matrix);
        for (let i = 0; i < neighbors.length; i++) {
            let neighbor = neighbors[i];
            // checking to see if there are found in our visited set 
            // everything inside visited is a string so we have to use toString 
            // before adding it in
            if (!visited.has(neighbor.toString())) {
                // if not, add each one in 
                visited.add(neighbor.toString());
                // to to also add to queue to continue the while loop
                queue.push(neighbor);
            }
        }
    }
    return false;
}


// ***** UNCOMMENT FOR LOCAL TESTING *****

// const matrix1 = [ 
//     [  1,  2,  3,  4 ],
//     [  5,  6,  7,  8 ],
//     [  9, 10, 11, 12 ],
//     [ 13, 14, 15, 16 ]
// ];

// // EXAMPLE TESTS #1. Tests for findNeighbors function
// console.log(findNeighbors([1,1], matrix1)) // Finds all 4 neighbors from an
// // internal node (left, right, down, up)
// // [ [ 0, 1 ], [ 2, 1 ], [ 1, 2 ], [ 1, 0 ] ]

// console.log(findNeighbors([0,0], matrix1)); // Finds two neighbors from a
// // corner node // [ [ 1, 0 ], [ 0, 1 ] ]

// console.log(findNeighbors([3,1], matrix1)); // Finds three neighbors from
// // an edge node // [ [ 2, 1 ], [ 3, 2 ], [ 3, 0 ] ]


// EXAMPLE TESTS #2. Tests for bfsPath function

// console.log(bfsPath(matrix1, [0,0], 16)); // can traverse the entire matrix
// returns an array of coordinates with no duplicates:

// [
//     [ 0, 0 ], [ 1, 0 ],
//     [ 0, 1 ], [ 2, 0 ],
//     [ 1, 1 ], [ 0, 2 ],
//     [ 3, 0 ], [ 2, 1 ],
//     [ 1, 2 ], [ 0, 3 ],
//     [ 3, 1 ], [ 2, 2 ],
//     [ 1, 3 ], [ 3, 2 ],
//     [ 2, 3 ], [ 3, 3 ]
//  ]

// Note for debugging purposes: The coordinates should represent the following matrix values, in order:
// 1 5 2 9 6 3 13 10 7 4 14 11 8 15 12 16

// console.log(bfsPath(matrix1, [2,2], 11)); // returns a single node if end
// // value is located at start node
// // [ [ 2, 2 ] ]

// console.log(bfsPath(matrix1, [1,2], 8)); // can handle various start nodes 
// // and end values
// // [ [ 1, 2 ], [ 0, 2 ], [ 2, 2 ], [ 1, 3 ] ]

// console.log(bfsPath(matrix1, [0,0], 17)); // can return false if end value 
// // is not found
// // false

/*************DO NOT MODIFY UNDER THIS LINE ***************/

module.exports = [findNeighbors, bfsPath];