
Helm to install the operator
--------------------------


helm repo add grafana https://grafana.github.io/helm-charts
helm repo update
helm install k6-operator grafana/k6-operator




kubectl create configmap load-test --from-file test/test.js

$ configmap/load-test created

kubectl describe configmap load-test

kubectl apply -f custom-resource.yml

----------------------------------------
kubectl delete -f custom-resource.yml
kubectl delete configmap load-test




