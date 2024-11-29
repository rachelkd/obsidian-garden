---
{"dg-publish":true,"permalink":"/000-zettlekasten/initialize-cats/","created":"2024-11-27T23:44:54.710-05:00","updated":"2024-11-27T23:47:19.003-05:00"}
---


# 1. Entities Layer (Already Exists)

- `Cat` (entity)

# 2. Use Case Layer

## Input/Output Data

```java
class InitializeCatsInputData {
    private final String ownerUsername;
    
    public InitializeCatsInputData(String ownerUsername) {
        this.ownerUsername = ownerUsername;
    }
    
    public String getOwnerUsername() {
        return ownerUsername;
    }
}

class InitializeCatsOutputData {
    private final Collection<Cat> cats;
    
    public InitializeCatsOutputData(Collection<Cat> cats) {
        this.cats = cats;
    }
    
    public Collection<Cat> getCats() {
        return cats;
    }
}
```

## Boundaries

```java
interface InitializeCatsInputBoundary {
    void execute(InitializeCatsInputData inputData);
}

interface InitializeCatsOutputBoundary {
    void prepareSuccessView(InitializeCatsOutputData outputData);
    void prepareFailView(String error);
}
```

# 3. Interface Adapters Layer

## Controller

```java
class InitializeCatsController {
    private final InitializeCatsInputBoundary initializeCatsUseCaseInteractor;
    
    public InitializeCatsController(InitializeCatsInputBoundary initializeCatsUseCaseInteractor) {
        this.initializeCatsUseCaseInteractor = initializeCatsUseCaseInteractor;
    }
    
    public void initializeCats(String username) {
        InitializeCatsInputData inputData = new InitializeCatsInputData(username);
        initializeCatsUseCaseInteractor.execute(inputData);
    }
}
```

## Presenter

```java
class InitializeCatsPresenter implements InitializeCatsOutputBoundary {
    private final InitializeCatsViewModel viewModel;
    private final CatViewModelFactory catViewModelFactory;
    
    public InitializeCatsPresenter(InitializeCatsViewModel viewModel, 
                                 CatViewModelFactory catViewModelFactory) {
        this.viewModel = viewModel;
        this.catViewModelFactory = catViewModelFactory;
    }
    
    @Override
    public void prepareSuccessView(InitializeCatsOutputData outputData) {
        Collection<CatViewModel> catViewModels = outputData.getCats()
            .stream()
            .map(catViewModelFactory::create)
            .collect(Collectors.toList());
            
        viewModel.setCatViewModels(catViewModels);
        viewModel.firePropertyChanged();
    }
    
    @Override
    public void prepareFailView(String error) {
        viewModel.setError(error);
        viewModel.firePropertyChanged();
    }
}
```

## ViewModels

```java
class InitializeCatsViewModel extends ViewModel {
    private Collection<CatViewModel> catViewModels;
    private String error;
    
    // Standard getters/setters
    // PropertyChangeSupport methods
}

class CatViewModel {
    private final String name;
    private final int happiness;
    private final int hunger;
    // Other cat-specific view properties
    
    // Constructor, getters
}

class CatViewModelFactory {
    public CatViewModel create(Cat cat) {
        return new CatViewModel(
            cat.getName(),
            cat.getHappiness(),
            cat.getHunger()
            // Other properties
        );
    }
}
```

# 4. Frameworks & Drivers Layer

## View Factory

```java
class CatViewFactory {
    public CatView createCatView(CatViewModel viewModel) {
        return new CatView(viewModel);
    }
}
```

## Views

```java
class CatContainerView extends JPanel implements PropertyChangeListener {
    private final InitializeCatsViewModel viewModel;
    private final CatViewFactory catViewFactory;
    private final JPanel catsPanel;
    
    public CatContainerView(InitializeCatsViewModel viewModel, CatViewFactory catViewFactory) {
        this.viewModel = viewModel;
        this.catViewFactory = catViewFactory;
        this.catsPanel = new JPanel(new GridLayout(0, 3, 10, 10)); // 3 columns
        
        viewModel.addPropertyChangeListener(this);
        setupUI();
    }
    
    private void setupUI() {
        setLayout(new BorderLayout());
        add(catsPanel, BorderLayout.CENTER);
    }
    
    @Override
    public void propertyChange(PropertyChangeEvent evt) {
        if ("cats".equals(evt.getPropertyName())) {
            updateCatViews();
        } else if ("error".equals(evt.getPropertyName())) {
            showError(viewModel.getError());
        }
    }
    
    private void updateCatViews() {
        catsPanel.removeAll();
        for (CatViewModel catViewModel : viewModel.getCatViewModels()) {
            CatView catView = catViewFactory.createCatView(catViewModel);
            catsPanel.add(catView);
        }
        catsPanel.revalidate();
        catsPanel.repaint();
    }
    
    private void showError(String error) {
        // Show error dialog or message
    }
}
```

# Benefits of This Implementation

1. **Single Responsibility Principle:**
   - Each class has one specific job
   - Factory handles view creation
   - Presenter handles data transformation
   - ViewModels handle view state

2. **Open/Closed Principle:**
   - New cat view types can be added without modifying existing code
   - View factory can be extended for new view types

3. **Dependency Inversion:**
   - All dependencies point inward
   - Use interfaces for crossing boundaries

4. **Interface Segregation:**
   - Clear boundaries between components
   - Minimal interfaces

5. **Liskov Substitution:**
   - Different view implementations can be swapped without breaking the system
