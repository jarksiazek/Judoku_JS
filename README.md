# Judoku_JS
Sudoku numbers generator
Program not finished yet, so far the algorithm displayes the random numbers following the Sudoku rules. 

Action Items: 
1. Add Fancy loader 
2. Save result into file 
3. Load results from the file


Angular

Setter:
  @Input() set formConfig(config) {
    config && this.createForm(config);
  }

Boolean value from string: 
  !!'false' -> true

Setters: 
  @Input() set data(value){
    value && this.init(value);
  }
  
 json view in html: 
  <pre>{{ data$ | async | json }}</pre>

contentChild?:
@ContentChild(TempRef)


Websocket:
websocket.org

Code from training
https://rogu@bitbucket.org/rogu/demo-ng-adv-app.git

Router 
this.router.params.subscribe

Devtools angular
- angular augury

Guard - logika przed ladowaniem componentu

FormBuilder
