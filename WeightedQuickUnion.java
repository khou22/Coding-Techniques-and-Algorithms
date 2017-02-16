public class WeightedQuickUnion {

  private int[] id; // ID associated with index
  private int[] treeSize; // Size of each tree
  private int size; // Size of array

  // Initialize new object
  public WeightedQuickUnion(int n) {
    this.id = new int[n]; // Create new array
    this.treeSize = new int[n]; // Create new array
    this.size = n; // Declare size

    // Cycle through array
    for (int i = 0; i < this.id.length; i++) {
      this.id[i] = i; // Index as ID
      this.treeSize[i] = 1; // Size of 1
    }
  }

  // Size of array
  public int size() {
    return this.size; // Return size of array
  }

  // Check whether connected
  public boolean connected(int p, int q) {
    return (find(p) == find(q)); // If their roots are the same
  }

  // Find the root
  public int find(int p) {
    // Use the links to find the root
    while (p != this.id[p]) p = id[p]; // Iterate until get to root
    return p; // Return root
  }

  // Union between two values
  public void union(int p, int q) {
    System.out.println();
    System.out.println("Comparing " + p + " and " + q);

    int i = find(p); // Store root of p
    int j = find(q); // Store root of q
    System.out.println("Root of " + p + " is " + i);
    System.out.println("Root of " + q + " is " + j);

    if (i == j) return; // End if already connected

    System.out.println("Size of " + p + "'s tree: " + this.treeSize[i]);
    System.out.println("Size of " + q + "'s tree: " + this.treeSize[j]);

    if (this.treeSize[i] >= this.treeSize[j]) { // If same size or q's tree < p's tree
      // Q's root gets attached to P's root
      id[j] = i; // Set root of root of Q to root of P
      this.treeSize[i] += this.treeSize[j]; // Increase size of tree
      System.out.println("New tree size for " + p + ": " + this.treeSize[i]);
    } else { // If size of p is larger than size of q's tree
      // P's root gets attached to Q's root
      id[i] = j; // Set root of root of P to root of Q
      this.treeSize[j] += this.treeSize[i]; // Increase size of tree
      System.out.println("New tree size for " + q + ": " + this.treeSize[j]);
    }

    this.size--; // Decrease number of unique roots
  }

  // Human-readable
  public String toString() {
    String str = ""; // Empty string
    for (int i = 0; i < this.id.length; i++) {
      str += this.id[i] + " "; // Concatinate
    }
    return str; // Return concatinated human-readable string
  }

  // Test client
  public static void main(String[] args) {
    WeightedQuickUnion test = new WeightedQuickUnion(10);

    // Lecture test
    /*
    test.union(4, 3);
    test.union(3, 8);
    test.union(6, 5);
    test.union(9, 4);
    test.union(2, 1);
    test.union(5, 0);
    test.union(7, 2);
    test.union(6, 1);
    test.union(7, 3);
    */


    test.union(5, 4);
    System.out.println(test);
    
    test.union(8, 3);
    System.out.println(test);
    
    test.union(1, 9);
    System.out.println(test);
    
    test.union(9, 4);
    System.out.println(test);
    
    test.union(0, 5);
    System.out.println(test);
    
    test.union(2, 7);
    System.out.println(test);
    
    test.union(3, 2);
    System.out.println(test);
    
    test.union(3, 5);
    System.out.println(test);
    
    test.union(7, 6);

    System.out.println(test);
  }

}
