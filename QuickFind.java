public class QuickFind {

  private int[] id; // ID associated with index
  private int size; // Size of array

  // Initialize new object
  public QuickFind(int n) {
    this.id = new int[n]; // Create new array
    this.size = n; // Declare size

    // Cycle through array
    for (int i = 0; i < this.id.length; i++)
      this.id[i] = i; // Index as ID
  }

  // Size of array
  public int size() {
    return this.size; // Return size of array
  }

  // Check whether connected
  public boolean connected(int p, int q) {
    return (this.id[p] == this.id[q]);
  }

  // Find the id value
  public int find(int p) {
    return this.id[p];
  }

  // Union between two values
  public void union(int p, int q) {
    int pID = this.id[p]; // Value to change
    int qID = this.id[q]; // Value everything will be changed to

    for (int i = 0; i < this.id.length; i++) {
      if (this.id[i] == pID) // If need to change value
        this.id[i] = qID; // Change value
    }
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
    QuickFind test = new QuickFind(10);

    test.union(7, 4);
    test.union(4, 9);
    test.union(8, 1);
    test.union(5, 0);
    test.union(6, 2);
    test.union(2, 5);

    System.out.println(test);
  }

}
